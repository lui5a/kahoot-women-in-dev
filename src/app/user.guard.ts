import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class UserGuard implements CanActivate{

    constructor(

    ) { }

    canActivate(){
        const user =  localStorage.getItem('user');
        if(!user){
            return false
        }else{
            return true
        }

    }
}
