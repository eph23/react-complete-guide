import MinNavigation from "../components/MinNavigation";

function ErrorPage() {
    return (
        <>
            <MinNavigation />
            <main>
                <h1>An Error Occurred</h1>
                <p>Could not find this page!</p>
            </main>
        </>
    );
}

export default ErrorPage;
