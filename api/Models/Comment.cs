using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    [Table("Comments")]
    public class Comment
    {
        public int Id { get; set; }
        public String Title { get; set; } = string.Empty;
        public int? StockId { get; set; }
        public Stock? Stock { get; set; }
        public String Content { get; set; } = string.Empty;
        public DateTime CreatedOn { get; set; } = DateTime.UtcNow;
        public string AppUserId { get; set; } = string.Empty;
        public AppUser AppUser { get; set; }
    }
}