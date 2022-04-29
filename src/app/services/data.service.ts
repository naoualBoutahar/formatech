import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
 
export interface Course {
  id?: string;
  title: string;
  description: string;
  img:string;
  price:number;
}
 
@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  constructor(private firestore: Firestore) { }
 
  getCourses(): Observable<Course[]> {
    const coursesRef = collection(this.firestore, 'courses');
    return collectionData(coursesRef, { idField: 'id'}) as Observable<Course[]>;
  }
 
  getCourseById(id): Observable<Course> {
    const courseDocRef = doc(this.firestore, `courses/${id}`);
    return docData(courseDocRef, { idField: 'id' }) as Observable<Course>;
  }
 
 
}