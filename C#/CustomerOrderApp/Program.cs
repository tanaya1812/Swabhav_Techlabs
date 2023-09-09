using CustomerApp.Model;

namespace CustomerApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<Order> orders = new List<Order> 
            {
                new Order(101,DateTime.Now, new List<LineItem>
                {
                    new LineItem(1, 2, new Product(1, "product1", 100, 10)),
                    new LineItem(2, 2, new Product(2, "product2", 200, 30))
                }),
                new Order(102, DateTime.Now, new List<LineItem>
                {
                    new LineItem(3, 3, new Product(3, "product3", 150, 50)),
                    new LineItem(4, 1, new Product(4, "product4", 50, 10))
                })
            };

            List<Order> orders2 = new List<Order>
            {
                new Order(103,DateTime.Now, new List<LineItem>
                {
                    new LineItem(1, 2, new Product(5, "product5", 400, 20))
                    
                }),
                
            };

            Customer customer = new Customer(101, "Tanaya" ,orders);

            Customer customer2 = new Customer(102, "Anagha", orders2);

            Console.WriteLine(customer);
            Console.WriteLine(customer2);
        }
    }
}