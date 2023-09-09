using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace CustomerApp.Model
{
    internal class LineItem
    {
        public int Id { get; set; }
        public int Quantity { get; set; }

        public Product Product { get; set; }

        public LineItem(int id, int quantity, Product product)
        {
            Id = id;
            Quantity = quantity;
            Product = product;
        }

        public double CalculateLineItemCost()
        {
            double unitCostAfterDiscount = Product.CalculateDiscountedPrice();
            double lineItemCost = unitCostAfterDiscount * Quantity;
            return lineItemCost;
        }

        public override string ToString()
        {
            return $"LineItemId ProductId ProductName Quantity UnitPrice Discount% UnitCostAfterDiscount TotalLineItemCost \n"+
            $"\t{Id} " +
            $"\t{Product.Id} " +
            $"\t{Product.Name} " +
            $"\t{Quantity} " +
            $"\t{Product.Price} " +
            $"\t{Product.DiscountPercent} " +
            $"\t\t{Product.CalculateDiscountedPrice()} " +
            $"\t\t{CalculateLineItemCost()}";
        }
    }
}
