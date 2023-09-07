using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieAppClassLibrary.Exceptions
{
    public class NoMovieOfThisNameException : Exception
    {
        public NoMovieOfThisNameException(string msg) : base(msg) { }
    }
}
