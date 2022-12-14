//1.Assignment variable
const fname = "Mark Zuckaberg"

//2.Function Componet
function Greeting() {
    return(
        <div>
            <h1>Hello Reactjs!</h1>
        </div>
    ) 
}

function Frontend(){
    return(
        <div>
            <h2>Client side rendering</h2>
            <ol type="A">
                <li>ReactJS</li>
                <li>VueJS</li>
                <li>Aungular</li>
            </ol>
        </div>
    )
}

function Backend(){
    return(
        <div>
        <h2>Server side rendering</h2>
        <ol type="I">
            <li>NextJS</li>
            <li>NuxtJS</li>
            <li>NestJS</li>
        </ol>
        </div>
    )
}

function Time(){
    const cTime = new Date().toTimeString()
    return(
        <div>
            <p>The current time is{cTime}</p>
        </div>
    )
}

function getCurrentTime(){
    return new Date().toTimeString()
}

function Country(props){
    return <h2>I live in {props.message.name} {props.message.distric}</h2>
}

function Province(){
    // const provinceInfo="Trat"
    const provinceInfo={name:"Tart", distric: "Meang Trat"}
    return(
        <div>
            <h1>What province are you in?</h1>
            <Country message={provinceInfo} />
        </div>
    ) 
}

function Photo(){
    return <img src="https://picsum.photos/id/1060/536/354?blur=2" />
}

function MyApp(){
    return(
        <div>
            <h1 className="text">Welcome to ReactJS!</h1>
            <hr />
            <h1 className="text2">Hello, World! {fname}</h1>
            <hr />
            <Greeting />
            <hr />
            <Frontend />
            <hr />
            <Backend />
            <hr />
            <Time />
            <hr />
            <Country message="Thailand" />
            <hr />
            <Province />
            <hr />
            <Photo />
            <p>The current time is <span className="text3">{getCurrentTime()}</span></p>
        </div>
    )
}


// const domContainer = document.querySelector('#root');
const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyApp />);