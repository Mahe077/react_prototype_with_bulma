import { Cards, Hero, Levels, Navbar, Content} from '../../components'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <br/>
            <Levels />
            <div class="columns">
                <div class="column">
                    <Cards name="JOHN1" email="@johnsmith1"/>
                </div>
                <div class="column">
                    <Cards name="JOHN2" email="@johnsmith2"/>    
                </div>
                <div class="column">
                    <Cards name="JOHN3" email="@johnsmith3"/>
                </div>
                <div class="column">
                    <Cards name="JOHN4" email="@johnsmith4"/>    
                </div>
            </div>
            <Content/>
        </div>
    )
}