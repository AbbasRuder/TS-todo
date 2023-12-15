# TS


## Primitive types

1. string
   ````javascript
   let str: string
   str = 'my type is string'
   ````
2. number
    ````javascript
   let num: number
   num = 43
   ````
3. boolean
    ````javascript
   let bol: boolean
   bol = true
   ````

## Non-primitive types

1. Array
````javascript
let strArr: string[]
let numArr: number[]
````

2. Tupple
````javascript
let arr: [string, number]
````
Now `arr` can only contain 1 string and 1 number and in the exact order that they are defined in.

3. Object

- declaring types
  
````javascript
type Person = {
    name: string,
    age: number,
    isMale: boolean
}

let obj: Person = {
      name: 'Abbash',
      age: 21,
      isMale: true
    }
````

We have defined the type `Person` and then assigned the object `obj` with it.

> **Q**. But what if we wanted the `isMale` to be optional ?

We can use a `?` to make the property `isMale` optional.
````javascript
type Person = {
    name: string,
    age: number,
    isMale?: boolean
}

let obj: Person = {
      name: 'Abbash',
      age: 21
    }
````


> **Q**. And what if we want an array of `Person` object?

We can declare it similar to how we have done previously for arrays

````javascript
type Person = {
    name: string,
    age: number,
    isMale: boolean
}

let obj: Person[] = [
        {
        name: 'Abbash',
        age: 22,
        isMale: true
        },
        {
        name: 'Some',
        age: 20,
        isMale: false
        }
    ]
````

4. any
````javascript
let newVar: any

newVar = 'any string'
newVar = 32

newVar = {
    name: 'ss',
    age: 32
}
````

`any` can be used to define any value or when you wanna run from typescript type checking rules.

> *Note* -> Using `any` disables all further type checking. So it is recommended to generally not rely on `any`

## Unions 

We can define a variable to accept different types using unions

````javascript
 let age: number | string

  age = 5
  age = 'string'
````

Here age can be both number and a string.

## Functions

