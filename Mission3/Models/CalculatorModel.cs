using System;
using System.ComponentModel.DataAnnotations;
namespace Mission3.Models
{
    public class CalculatorModel
    {
        [Range(0, 100)]
        public float Assignments { get; set; }

        [Range(0, 100)]
        public float Projects { get; set; }

        [Range(0, 100)]
        public float Quizzes { get; set; }

        [Range(0, 100)]
        public float Exams { get; set; }

        [Range(0, 100)]
        public float Intex { get; set; }
    }
}
