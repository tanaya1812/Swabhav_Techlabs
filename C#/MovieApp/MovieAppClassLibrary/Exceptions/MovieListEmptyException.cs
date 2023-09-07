using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieAppClassLibrary.Exceptions
{
    public class MovieListEmptyException : Exception
    {
        public MovieListEmptyException(string msg) : base(msg) { }
    }
}
