
export class RestData {


  public static readonly HOST_BASIC:string = "http://localhost:8080/"
  public static readonly HOST_BASE1:string = RestData.HOST_BASIC+"api/"
  public static readonly HOST_BASE2:string = RestData.HOST_BASE1+"shop/"
  public static readonly DESKTOP_PRODUCTS_ALL:string = this.HOST_BASE2+"group1/desktop/products"
  public static readonly PHONE_PRODUCTS_ALL:string = this.HOST_BASE2+"group1/phone/products"
  public static readonly GENERIC_PRODUCT:string = this.HOST_BASE2+"group1/"
  // todo: front end, add functionality of searching within a specific category
  public static readonly DESKTOP_PRODUCT:string = this.HOST_BASE2+"group1/desktop"
  public static readonly PHONE_PRODUCT:string = this.HOST_BASE2+"group1/phone"

  public static readonly PRODUCT_CATEGORY_LIST:string = this.HOST_BASE2+"categories/"
  // search {?id=2&pageNumber=0&pageSize=1}
  public static readonly PRODUCT_CATEGORY_Q:string = this.HOST_BASE2+"categories/findByCategoryId"
  // search product {?name=GameBox&pageNumber=1&pageSize=1}
  public static readonly SEARCH_DESKTOP:string = this.HOST_BASE2+"group1/desktop/filter"
  public static readonly SEARCH_PHONE:string = this.HOST_BASE2+"group1/desktop/filter"
  public static readonly SEARCH_GROUP1:string = this.HOST_BASE2+"group1/filter"


  // public static readonly ALL_COUNTRIES:string = this.HOST+"api/countries"
  public static readonly ALL_COUNTRIES:string = this.HOST_BASE2+"countries"
  public static readonly CUSTOM_STATE:string = this.HOST_BASE2+"states"
  public static readonly CUSTOM_STATE_By_Country:string = this.HOST_BASE2+"states/search/findByCountryCode"

  public static readonly PURCHASE:string = this.HOST_BASE1+"finance/checkout" // requires bearer auth
  public static readonly ORDERS:string = this.HOST_BASE1+"finance/orders" // requires bearer auth

  // auth
  public static readonly SIGN_UP:string = this.HOST_BASE1+"authentication/sign-up"
  public static readonly LOGIN:string = this.HOST_BASE1+"authentication/sign-in"
  // public static readonly MAKE_ADMIN:string = this.HOST_AUTH+"/authentication/login" // requires internal api key


  public static readonly CACHE_DURATION_PL:number = 60;
  public static readonly CACHE_DURATION_COUNTRY:number = 24*60;
  public static readonly CACHE_DURATION_STATE:number = 24*60;

  public static readonly CACHE_DURATION_AUTH:number = 24*60;







}


