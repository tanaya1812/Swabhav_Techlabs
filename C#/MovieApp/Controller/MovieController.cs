
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MovieAppClassLibrary;
using MovieAppClassLibrary.Services;

namespace MovieApp.Controller
{
    internal class MovieController
    {
        public MovieController()
        {
            PlayApp();
        }


        public static void PlayApp()
        {

            Console.WriteLine("\nWelcome to Movies App!");
            int choice = 0;
            while (choice != 6)
            {
                try
                {
                    new MovieManager();

                    Console.WriteLine("\nMovieApp status: " + MovieManager.MovieCount() + "/5");
                    Console.WriteLine("Menu:");
                    Console.WriteLine("1. Display All movies");
                    Console.WriteLine("2. Display movies by year");
                    Console.WriteLine("3. Add movie");
                    Console.WriteLine("4. Remove a movie");
                    Console.WriteLine("5. Clear all movies");
                    Console.WriteLine("6. Exit");
                    Console.Write("Enter your choice(1 to 6): ");
                    choice = Convert.ToInt32(Console.ReadLine());

                    switch (choice)
                    {
                        case 1:
                            ShowMovies();
                            break;
                        case 2:
                            ShowMovieByYear();
                            break;
                        case 3:
                            AddMovie();
                            break;
                        case 4:
                            RemoveMovie();
                            break;
                        case 5:
                            ClearMovies();
                            break;
                        case 6:
                            Console.WriteLine("Exiting the application.");
                            break;
                        default:
                            Console.WriteLine("Invalid choice. Please select again.");
                            break;
                    }
                }
                catch (Exception e) 
                { 
                    Console.WriteLine(e.Message); 
                }
            }
        }


        public static void ShowMovies()
        {
            try
            {
                List<string> moviesToDisplay = MovieManager.DisplayMovies();
                if (moviesToDisplay.Count != 0)
                {
                    Console.WriteLine("Movies List:");

                    foreach (string movie in moviesToDisplay)
                    {
                        Console.WriteLine(movie);
                    }
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }

        public static void ShowMovieByYear()
        {
            try
            {
                Console.WriteLine("Enter a year of movie: ");
                int movieYearToDisplay = Convert.ToInt32(Console.ReadLine());

                List<Movie> moviesByYear = MovieManager.DisplayMoviesByYear(movieYearToDisplay);

                Console.WriteLine("Movies List by year:");
                foreach (Movie movie in moviesByYear)
                {
                    if (movie != null)
                    {
                        Console.WriteLine($"ID: {movie.Id}, Name: {movie.Name}, Genre: {movie.Genre}, Year: {movie.Year}");
                    }
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }

        public static void AddMovie()
        {
            try
            {
                if (MovieManager.MovieCount() >= 5)
                {
                    MovieManager.ListIsFull();
                }

                Console.Write("Enter Movie ID: ");
                int id = Convert.ToInt32(Console.ReadLine());

                Console.Write("Enter Movie Name: ");
                string name = Console.ReadLine();

                Console.Write("Enter Movie Genre: ");
                string genre = Console.ReadLine();

                Console.Write("Enter Movie Year: ");
                int year = Convert.ToInt32(Console.ReadLine());

                MovieManager.AddMovieToList(id, name, genre, year);
                Console.WriteLine("Movie added successfully!");

            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }

        public static void RemoveMovie()
        {
            try
            {
      
                Console.WriteLine("Enter a name of movie: ");
                string movieNameToRemove = Console.ReadLine();

                MovieManager.RemoveMoviesByName(movieNameToRemove);
                Console.WriteLine("Movie with the given name removed successfully.");

            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }

        public static void ClearMovies()
        {
            try
            {
                MovieManager.ClearAllMoviesFromList();
                Console.WriteLine("All movies cleared.");
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }

    }
}