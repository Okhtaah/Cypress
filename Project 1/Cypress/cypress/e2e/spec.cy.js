// Test 1: Login Validation
describe('Login Form Tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it('should do nothing when clicking login with only a username', () => {
      cy.get('#username').type('bash');
      cy.get('[data-cy="submit-button"]').click();
    });
  
    it('should do nothing when clicking login with only a password', () => {
      cy.get('#password').type('password123');
      cy.get('[data-cy="submit-button"]').click();
    });
  
    it('should not log in if the username does not start with #', () => {
        cy.get('#username').type('bash'); // Missing #
        cy.get('#password').type('password123');
        cy.get('[data-cy="submit-button"]').click();
      });
    
    it('should log in successfully when both username and password are entered', () => {
      cy.get('#username').type('#bash#');
      cy.get('#password').type('password123');
      cy.get('[data-cy="submit-button"]').click();
      cy.contains('Login Successful!').should('be.visible'); // Success message appears
    });
  });
  

// Test 2: Dropdown Selection
describe('Dropdown Selection', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('should display message based on selected option', () => {
        cy.get('#dropdown').select('Option 2');
        cy.contains('You selected: option2').should('be.visible');
    });

    it('should display message based on selected option', () => {
        cy.get('#dropdown').select('Option 2');
        cy.get('#dropdown').select('Option 1');
        cy.contains('You selected: option1').should('be.visible');
    });

});


// Test 3: Checkbox Interaction
describe('Checkbox Interaction', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');        
    });

    it('should display message when checkbox is checked', () => {
        cy.get('#agree').check();
        cy.contains('You agreed to the terms!').should('be.visible');
    });
  
    it('should display message when checkbox is unchecked', () => {
        cy.get('#agree').check();
        cy.get('#agree').uncheck();
        cy.contains('You disagreed with the terms.').should('be.visible');
    });
});


// Test 4: User Interactions

// Test 4.1: Double-click
describe('Double-Click', () => {
    it('should double-click', () => {
        cy.visit('http://localhost:3000');        
        cy.get('#double-click-area').dblclick();
    });
});

// Test 4.2: Right-click
describe('Right-Click Test', () => {
    it('should right-click', () => {
        cy.visit('http://localhost:3000');        
        cy.get('#right-click-area').rightclick();
    });
});

// Test 4.3: Drag-and-Drop
describe('Drag-and-Drop Test', () => {
    it('should move item to the drop area', () => {
        cy.visit('http://localhost:3000');
        cy.get('#drag-item').trigger('mousedown');
        cy.get('#drop-zone').trigger('mousemove').trigger('mouseup');
    });
});
  
// Test 4.4: Scrolling
describe('Scroll Test', () => {
    it('should scroll through the container', () => {
        cy.visit('http://localhost:3000');
        cy.get('#scroll-container').scrollTo('bottom');
    });
  });
  