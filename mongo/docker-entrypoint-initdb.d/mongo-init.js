print("Start of mongo-init.js");

const MONGODB_USERNAME = process.env.MONGODB_USERNAME;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;

const MONGODB_STORE_DATABASE = process.env.MONGODB_STORE_DATABASE;
const MONGODB_PRODUCT_DATABASE = process.env.MONGODB_PRODUCT_DATABASE;
const MONGODB_CART_DATABASE = process.env.MONGODB_CART_DATABASE;
const MONGODB_WISHLIST_DATABASE = process.env.MONGODB_WISHLIST_DATABASE;

const storeServiceDb = db.getSiblingDB(MONGODB_STORE_DATABASE);
const produitServiceDb = db.getSiblingDB(MONGODB_PRODUCT_DATABASE);
const cartServiceDb = db.getSiblingDB(MONGODB_CART_DATABASE);
const wishlistServiceDb = db.getSiblingDB(MONGODB_WISHLIST_DATABASE);

storeServiceDb.createUser({
  user: MONGODB_USERNAME,
  pwd: MONGODB_PASSWORD,
  roles: [{ role: "readWrite", db: MONGODB_STORE_DATABASE }],
});

produitServiceDb.createUser({
  user: MONGODB_USERNAME,
  pwd: MONGODB_PASSWORD,
  roles: [{ role: "readWrite", db: MONGODB_PRODUCT_DATABASE }],
});

cartServiceDb.createUser({
  user: MONGODB_USERNAME,
  pwd: MONGODB_PASSWORD,
  roles: [{ role: "readWrite", db: MONGODB_CART_DATABASE }],
});

wishlistServiceDb.createUser({
  user: MONGODB_USERNAME,
  pwd: MONGODB_PASSWORD,
  roles: [{ role: "readWrite", db: MONGODB_WISHLIST_DATABASE }],
});

print("End of mongo-init.js");
