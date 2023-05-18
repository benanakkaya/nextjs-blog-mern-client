import { NextResponse } from "next/server";
import { verifyJwtToken } from "./app/libs/auth";

const AUTH_PAGES = ['/login','/register']

const isAuthPages = (url) => {
    return AUTH_PAGES.some((e) => e.startsWith(url));
}

export async function middleware(request){

    //url mevcut url, nextUrl gidilmek istenen url
    const {url,nextUrl,cookies} = request;

    const {value:token} = cookies.get('token') ?? {value:null};

    const hasVerifiedToken = token && await verifyJwtToken(token);

    const isAuthPageRequested = isAuthPages(nextUrl.pathname);



    if(isAuthPageRequested){
        if(!hasVerifiedToken){
            const response = NextResponse.next();
            return response; 
        }
        const response = NextResponse.redirect(new URL("/",url));
        return response;
    }

    if(!hasVerifiedToken){
        return NextResponse.redirect(new URL("/login",url))
    }
 
    return NextResponse.next();

}


export const config = {
    matcher: [
        '/login', 
        '/register',
        '/new-post',
        '/my-posts'
    ]
}