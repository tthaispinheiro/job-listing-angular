import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  filteredJobs: any[] = [];
  technologies: string[] = ['React', 'Node.js', 'Ruby', 'C++', 'Java'];
  isFAQExpanded: boolean = false;

  // Vagas iniciais
  allJobs: any[] = [
    { title: 'Frontend Developer', description: 'Build websites and web applications.', tags: ['React', 'Node.js'] },
    { title: 'Backend Developer', description: 'Build the server side of applications.', tags: ['Ruby', 'Java'] },
    { title: 'Full Stack Developer', description: 'Work on both frontend and backend.', tags: ['C++', 'Node.js'] },
    { title: 'React Developer', description: 'Specialize in React.js for frontend development.', tags: ['React'] },
    { title: 'Node.js Developer', description: 'Develop server-side applications using Node.js.', tags: ['Node.js'] },
    { title: 'Ruby Developer', description: 'Work with Ruby on the server side.', tags: ['Ruby'] },
    { title: 'C++ Software Engineer', description: 'Work on systems and software using C++.', tags: ['C++'] },
    { title: 'Java Backend Developer', description: 'Develop backend services using Java.', tags: ['Java'] },
    { title: 'Full Stack Engineer', description: 'Work on both frontend and backend with JavaScript and Java.', tags: ['React', 'Java'] },
    { title: 'Ruby on Rails Developer', description: 'Develop applications with Ruby on Rails.', tags: ['Ruby'] },
    { title: 'Senior Node.js Developer', description: 'Senior developer role for building scalable applications using Node.js.', tags: ['Node.js'] },
    { title: 'Java Software Engineer', description: 'Develop enterprise applications with Java.', tags: ['Java'] },
  ];

  ngOnInit(): void {
    // Inicializa a lista de empregos filtrados com todas as vagas
    this.filteredJobs = [...this.allJobs];
  }

  // Função para filtrar as vagas
  onFilterChange(event: any): void {
    const selectedTechnology = event.target.value;
    if (event.target.checked) {
      // Adiciona os empregos com a tecnologia selecionada
      this.filteredJobs = this.allJobs.filter(job => job.tags.includes(selectedTechnology));
    } else {
      // Reseta o filtro quando a tecnologia for desmarcada
      this.filteredJobs = [...this.allJobs];
    }
  }

  toggleFAQ(): void {
    this.isFAQExpanded = !this.isFAQExpanded;
  }

  // Função para recarregar a página
  reloadPage(): void {
    window.location.reload();
  }
}
