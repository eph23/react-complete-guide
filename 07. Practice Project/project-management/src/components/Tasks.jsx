import NewTasks from "./NewTasks";

function Tasks() {
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <p className="text-stone-800 mb-4">
                This project dos'nt have any tasks yet
            </p>
            <NewTasks />
            <ul></ul>
        </section>
    );
}

export default Tasks;
