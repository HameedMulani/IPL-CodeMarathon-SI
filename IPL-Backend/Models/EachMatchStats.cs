using System.ComponentModel.DataAnnotations;

namespace WebApplication2.Models
{
    public class EachMatchStats
    {
        public string? MatchDate { get; set; }
        public string? Venue { get; set; }
        public string? TeamName1 { get; set; }
        public string? TeamName2 { get; set; }
        public int? TotalNumberOfFanEngagements { get; set; }

    }
}
