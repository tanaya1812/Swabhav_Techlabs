using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieAppClassLibrary.Exceptions
{
    public class MovieListFullException : Exception
    {
        public MovieListFullException(string msg) : base(msg) { }
    }
}
