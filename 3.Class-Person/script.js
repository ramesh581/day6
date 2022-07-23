class Person{
    constructor(name,age,height,weight,languages,qualification,skills,job,hobbies){
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.languages = languages;
        this.qualification = qualification;
        this.skills = skills;
        this.job = job;
        this.hobbies = hobbies;
    }
    getPerson() { 
        console.log(`
        Person Details:

        Name : ${this.name},
        Age : ${this.age},
        Height : ${this.height},
        Weight : ${this.weight},
        Qualification : ${this.qualification},
        Languages : ${this.languages},
        Skills : ${this.skills},
        Job : ${this.job},
        Hobbies : ${this.hobbies}`);
    }

}

let person1 = new Person("ramesh", "25", "180cm", "60kg",[],"B.Tech",[],"SoftwareEngineer");

person1.languages = ["English", "Telugu", "Hindi", "Tamil"];

person1.skills = ["Guitar", "Singing", "Programming"];

person1.hobbies = ["reading","watching movies","Gaming","Gym"];

person1.getPerson();