document.addEventListener('DOMContentLoaded', function() {
    const navHTML = `
        <footer>
            <div>
                <p>Author: Group ?</p>
                <p>Email: <a href="mailto:here@example.com">here@example.com</a></p>
                <p>Credits:</p>
                <div id="credits">
                <a href="https://www.flaticon.com/free-icons/home" title="home icons">Home icons created by Dave Gandy - Flaticon</a>
                <br>
                <a href="https://www.freepik.com/icon/cursor_587335#fromView=family&page=1&position=3&uuid=7cf57952-11bf-492f-a90a-7c81bdc7b47e">Icon by Freepik</a>
                </div>
            </div>
        </footer>
    `;
    
    
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = navHTML;
    }
});
