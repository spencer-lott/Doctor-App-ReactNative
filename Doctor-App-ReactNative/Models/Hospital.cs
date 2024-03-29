﻿namespace Doctor_App_ReactNative.Models
{
    public class Hospital
    {
        public int Id { get; set; }

        public string? Name { get; set; }

        public string? Address { get; set; }

        public string? ImageUrl { get; set; }    

        public string? Website { get; set; }

        public string? Phone { get; set; }

        public string? Description { get; set; }

        public Hospital_Category? Hospital_Category { get; set; }

        public Category? Category { get; set; }
    }
}
