using MovieAppClassLibrary.Exceptions;
using MovieAppClassLibrary.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieAppClassLibrary.Services
{
    public class MovieManager
    {

        public static string filePath = @"D:\Techlabs\Assignments\A-Movie App-ClassLibraryApp\MovieApp\MovieList.txt";
        static List<Movie> movieList;
        public static int MaxCount = 5;
        public MovieManager()
        {
            movieList = new List<Movie>();
            movieList = DataSerializer.BinaryDeserializer(filePath);
        }

        public static int MovieCount()
        {
            return movieList.Count ;
        }

        public static List<string> DisplayMovies()
        {
            if (MovieCount() == 0)
            {
                throw new MovieListEmptyException("Error while showing movies: The list is empty.");
            }

            List<string> displayMovies = new List<string>();
            foreach (Movie movie in movieList)
            {
                if (movie != null)
                {
                    string moviesToDisplay = ($"ID: {movie.Id}, Name: {movie.Name}, " +
                        $"Genre: {movie.Genre}, Year: {movie.Year}");
                    displayMovies.Add(moviesToDisplay);
                }
            }

            return displayMovies;
        }

        public static List<Movie> DisplayMoviesByYear(int movieYearToDisplay)
        {
            if (MovieCount() == 0)
            {
                throw new MovieListEmptyException("Error while showing movies: The list is empty.");
            }

            List<Movie> findMovieByYear = movieList.FindAll(movie => movie.Year == movieYearToDisplay);

            if (findMovieByYear.Count == 0)
            {
                throw new NoMoviesOfThisYearException("Error while showing movies: No movie to display by this year.");
            }

            return findMovieByYear;

        }

       

        public static void AddMovieToList(int id, string name, string genre, int year)
        {

            if (MovieCount() < MaxCount)
            {
                Movie movie = new Movie(id, name, genre, year);
                movieList.Add(movie);
                DataSerializer.BinarySerializer(filePath, movieList);
            }
        }


        public static void RemoveMoviesByName(string movieNameToRemove)
        {
            if (MovieCount() == 0)
            {
                throw new MovieListEmptyException("Error while removing movies: The list is empty.");
            }

            Movie findMovie = movieList.Find(movie => movie.Name == movieNameToRemove);

            if (findMovie == null)
                throw new NoMovieOfThisNameException("Error while removing movies: No movie to remove with the given name.");
            else
            {
                movieList.Remove(findMovie);
                DataSerializer.BinarySerializer(filePath, movieList);
            }
        }

        public static void ClearAllMoviesFromList()
        {
            if (MovieCount() == 0)
            {
                throw new MovieListEmptyException("Error while clearing movies: The list is empty.");
            }
            movieList.Clear();
            DataSerializer.BinarySerializer(filePath, movieList);
        }

        public static void ListIsFull()
        {
            if (MovieCount() >= MaxCount)
            {
                throw new MovieListFullException("Error while adding movies: The list is full.");
            }
        }
    }
}
