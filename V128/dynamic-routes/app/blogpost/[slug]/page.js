export default async function Page({ params }) {
    throw new Error("Error hai")
    const { slug } = await params
    let languages = ["Python", "JS", "Java", "Cpp", "CS"]
    if (languages.includes(slug)) {
        return <div>My Post: {slug}</div>
    }
    else {
        return <div>Post not Found</div>
    }
}