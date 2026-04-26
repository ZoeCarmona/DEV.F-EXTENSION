
class Idol {
    constructor (name, age, gender, position, group, song){
        this.name = name
        this.age = age
        this.gender = gender
        this.position = position
        this.group = group
        this.song = song
    }   

    showInfo(){
        return `${this.name}, ${this.age}, ${this.gender}, ${this.position}, ${this.group}`
    }

    sing (){
        const audio = new Audio(this.song)
        audio.play()
    }
}

const idol1 = new Idol('Huening Kai', 23, 'Male', 'Singer', 'Tomorrow x Together', './audio/kai.mp3')

document.getElementById('showBtn').addEventListener('click', () => {
    document.getElementById('info').textContent = idol1.showInfo()
})

document.getElementById('singBtn').addEventListener('click', () => {
    idol1.sing()
})