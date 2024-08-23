//your JS code here. If required.
       function updateSize() {
            // Get the width and height of the window
            const width = window.innerWidth;
            const height = window.innerHeight;

            // Select the h1 element inside the div with id 'sizeInfo'
            const sizeInfo = document.querySelector('#sizeInfo h1');
            
            // Update the text content with the current width and height
            sizeInfo.textContent = `Width: ${width} and Height: ${height}`;
        }

        // Event listener for window resize event
        window.addEventListener('resize', updateSize);

        // Initial call to set the size when the page loads
        updateSize();