fetch('../newusers.json')
			.then(response => response.json())
			.then(jsonData => {
				const table = document.querySelector('#jsonTable tbody');

				for (let i = 0; i < jsonData.length; i++) {
					const row = document.createElement('tr');

					for (let key in jsonData[i]) {
						const cell = document.createElement('td');
						cell.textContent = jsonData[i][key];
						row.appendChild(cell);
					}

					const updateButton = document.createElement('button');
					updateButton.textContent = 'Update';
					updateButton.addEventListener('click', () => {
						// Handle update button click here
						console.log(`Update button clicked for user ID ${jsonData[i]['userID']}`);
					});

					const deleteButton = document.createElement('button');
					deleteButton.textContent = 'Delete';
					deleteButton.addEventListener('click', () => {
						// Handle delete button click here
						console.log(`Delete button clicked for user ID ${jsonData[i]['userID']}`);
					});

					const actionCell = document.createElement('td');
					actionCell.appendChild(updateButton);
					actionCell.appendChild(deleteButton);
					row.appendChild(actionCell);

					table.appendChild(row);
				}
			})
			.catch(error => console.error('Error fetching JSON:', error));