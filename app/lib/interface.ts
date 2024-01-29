export interface simpleBlogCard {
    title: string;
    smallDescription: string;
    currentSlug: string;
    titleImage: any;
    categories: string;
  }
  
  export interface fullBlog {
    currentSlug: string;
    title: string;
    body: any;
    titleImage: any;
    categories: string;
    youtube: object; 
  }