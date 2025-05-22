using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Stock;
using api.Helpers;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [Route("api/stock")]
    [ApiController]
    public class StockController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        public StockController(ApplicationDBContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult GetAll()
        {
            var stocks = _context.Stocks.ToList()
            .Select(s => s.ToStockDto());
            return Ok(stocks);
        }
        [HttpGet("{id}")]
        public IActionResult GetById([FromRoute] int id)
        {
            var stock = _context.Stocks.Find(id);
            if (stock == null)
            {
                return NotFound();
            }
            return Ok(stock.ToStockDto());
        }
        [HttpPost]
        public IActionResult Create([FromBody] CreateStockRequestDto stockRequestDto)
        {
            var stockModel = stockRequestDto.ToStockFromCreateDTO();
            _context.Add(stockModel);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetById), new { id = stockModel.Id }, stockModel.ToStockDto());
        }
        [HttpPut]
        [Route("{id}")]
        public IActionResult Update([FromRoute] int id, [FromBody] UpdateStockRequestDto updateStockRequestDto)
        {
            var stock = _context.Stocks.FirstOrDefault(x => x.Id == id);
            if (stock == null)
            {
                return NotFound();
            }
            stock.Symbol = updateStockRequestDto.Symbol;
            stock.CompanyName = updateStockRequestDto.CompanyName;
            stock.Industry = updateStockRequestDto.Industry;
            stock.LastDiv = updateStockRequestDto.LastDiv;
            stock.Purchase = updateStockRequestDto.Purchase;
            stock.MarketCap = updateStockRequestDto.MarketCap;
            _context.SaveChanges();
            return Ok(stock.ToStockDto());
        }
        [HttpDelete]
        [Route("{id}")]
        public IActionResult Delete([FromRoute] int id) {
            var stock = _context.Stocks.FirstOrDefault(x => x.Id == id);
            if (stock == null)
            {
                return NotFound();
            }
            _context.Stocks.Remove(stock);
            _context.SaveChanges();
            return NoContent();
        }
    }
}