using System.ComponentModel.DataAnnotations;

namespace WebApplication2.Models
{
    public class Team
    {
        public int TeamId { get; set; }

        [Required(ErrorMessage = "Provide a Product Name")]
        [MaxLength(50, ErrorMessage = "Product name cannot be more than 25 character")]
        public string? TeamName { get; set; }
        
        [Required(ErrorMessage = "Provide a Product Name")]
        [MaxLength(50, ErrorMessage = "Product name cannot be more than 25 character")]
        public string? Coach { get; set; }
        
        [Required(ErrorMessage = "Provide a Product Name")]
        [MaxLength(100, ErrorMessage = "Product name cannot be more than 25 character")]
        public string? HomeGround { get; set; }
        
        
        public int FounderYear { get; set; }

        [Required(ErrorMessage = "Provide a Product Name")]
        [MaxLength(100, ErrorMessage = "Product name cannot be more than 25 character")]
        public string? Owner { get; set; }

    }
}
