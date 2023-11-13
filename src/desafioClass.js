(function(){
    class Hero{
        constructor(heroName, heroAge, heroType = 'Mago'){
            this.heroName = heroName
            this.heroAge = heroAge
            this.heroType = heroType
        }

        atacar(){
            switch(this.heroType){
                case 'Mago':
                    console.log(`O ${this.heroType} atacou usando magia`)
                    break;
                case 'Guerreiro':
                    console.log(`O ${this.heroType} atacou usando espada`)
                    break;
                case 'Monge':
                    console.log(`O ${this.heroType} atacou usando artes marciais`)
                    break;
                case 'Ninja':
                    console.log(`O ${this.heroType} atacou usando shuriken`)
                    break;
                default:
                    console.log(`O ${this.heroType} atacou`)
            }
        }
    }

    let hero = new Hero('Vinnie', 22)

    hero.atacar()
})()