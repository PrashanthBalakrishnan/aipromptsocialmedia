import Feed from '@/components/Feed'
const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                <br className="max-md:hidden" />
                <span className="black_gradient text-center">
                    Share and Discover AI Prompts
                </span>
            </h1>
            <p className="desc text-center">
                AI Promps allow you to share and discover new prompts to use for
                ChatGPT
            </p>

            <Feed />
        </section>
    )
}
export default Home
