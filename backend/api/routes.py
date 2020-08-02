from flask import Blueprint

routes_bp = Blueprint('routes',__name__)

@routes_bp.route("/")
def hello():
    return "Hello from Routes page"


# Create a Product
@routes_bp.route('/product', methods=['POST'])
def add_product():
  name = request.json['name']
  description = request.json['description']
  price = request.json['price']
  qty = request.json['qty']

  new_product = Product(name, description, price, qty)

  db.session.add(new_product)
  db.session.commit()

  return product_schema.jsonify(new_product)

# Get All Products
@routes_bp.route('/product', methods=['GET'])
def get_products():
  all_products = Product.query.all()
  result = products_schema.dump(all_products)
  return jsonify(result.data)