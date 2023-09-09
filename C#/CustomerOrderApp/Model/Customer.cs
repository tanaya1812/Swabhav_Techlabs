using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CustomerApp.Model
{
    internal class Customer
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public List<Order> Orders = new List<Order>();

        public Customer(int id, string name, List<Order> orders)
        {
            Id = id;
            Name = name;
            Orders = orders;
        }

        public string GetOrderDetails()
        {
            string data = "";
            foreach (Order order in Orders)
            {
                data += "\n" + order.ToString();
            }
            return data;
        }



        public override string ToString()
        {
            return $"Customer Id: {Id}\n" +
                $"Customer Name: {Name}\n" +
                $"Order Count: {Orders.Count}\n" +
                $"{GetOrderDetails()}\n";

        }
    }
}
