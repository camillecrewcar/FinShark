using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Comment;
using api.Extensions;
using api.Helpers;
using api.Interfaces;
using api.Mappers;
using api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace api.Controllers
{
    [Route("api/comment")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly IStockRepository _stockRepo;
        private readonly ICommentRepository _commentRepo;
        private readonly UserManager<AppUser> _userManager;
        private readonly IFMPService _fmpService;

        public CommentController(ICommentRepository commentRepository,
        IStockRepository stockRepository,
        UserManager<AppUser> userManager,
        IFMPService fmpService)
        {
            _userManager = userManager;
            _stockRepo = stockRepository;
            _commentRepo = commentRepository;
            _fmpService = fmpService;
        }
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var comments = await _commentRepo.GetAllAsync();
            var commentsDto = comments.Select(s => s.ToCommentDto());
            return Ok(commentsDto);
        }
        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var comment = await _commentRepo.GetByIdAsync(id);
            if (comment == null)
            {
                return NotFound();
            }
            return Ok(comment.ToCommentDto());
        }

        [HttpPost("{symbol:alpha}")]
        public async Task<IActionResult> Create([FromBody] CreateCommentDto commentDto, [FromRoute] string symbol)
        {
            if (ModelState.IsValid)
            {
                var stock = await _stockRepo.GetBySymbolAsync(symbol);
                if (stock == null)
                {
                    stock = await _fmpService.FindStockBySymbolAsync(symbol);
                    if (stock == null)
                    {
                        return BadRequest("Stock does not exist");
                    }
                    else
                    {
                        await _stockRepo.CreateAsync(stock);
                    }
                }
                var username = User.GetUsername();
                var appUser = await _userManager.FindByNameAsync(username);

                var commentModel = commentDto.ToCommentFromCreate(stock.Id);
                commentModel.AppUserId = appUser.Id;
                await _commentRepo.CreateAsync(commentModel);
                return CreatedAtAction(nameof(GetById), new { id = commentModel.Id }, commentModel.ToCommentDto());
            }
            return BadRequest("Stock does not exist");
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateCommentRequestDto updateCommentRequestDto)
        {
            var comment = await _commentRepo.UpdateAsync(id, updateCommentRequestDto.ToCommentFromUpdate(id));
            if (comment == null)
            {
                return NotFound("Comment not found");
            }
            return Ok(comment.ToCommentDto());
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> Delete([FromRoute] int id) {
            var comment = await _commentRepo.DeleteAsync(id);
            if (comment == null)
            {
                return NotFound("comment not found");
            }
            return Ok(comment);
        }
    }
}