using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace CustomerApp.Model
{
    internal class Order
    {
        public static int orderNo = 1;
        public int Id { get; set; }

        public int OrderNo { get; set; }
        public DateTime Date { get; set; }

        public List<LineItem> Items = new List<LineItem>();

        public Order(int id, DateTime date, List<LineItem> items)
        {
            Id = id;
            OrderNo = orderNo++;
            Date = date;
            Items = items;
        }

        public double CalculateOrderPrice()
        {
            double totalCost = 0;
            foreach (LineItem item in Items)
            {
                totalCost += item.CalculateLineItemCost();
            }
            return totalCost;
        }

        public string GetLineItemDetails()
        {
            string data = "";
            foreach (LineItem item in Items)
            {
                data += "\n" + item.ToString();
            }
            return data;
        }

        public override string ToString()
        {
            return $"Order No: {OrderNo}\n" +
                $"Order Id: {Id}\n" +
                $"Order Date: {Date}\n"+
                $"{GetLineItemDetails()}\n" +
                $"\n\t\t\t\t\t\t\t\t\t\t  ------------------" +
                $"\n\t\t\t\t\t\t\t\t\t\t  Order Cost: {CalculateOrderPrice()}" +
                $"\n----------------------------------------------------------------------------------------------------" ;

        }
    }
}
