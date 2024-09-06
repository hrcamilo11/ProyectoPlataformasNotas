import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../services/document.service';
import {CargarScriptsService} from "../../services/cargar-scripts.service";
import {FormsModule} from "@angular/forms";
import {DatePipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  imports: [
    FormsModule,
    DatePipe,
    NgForOf
  ],
  standalone: true,
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  documentos: any[] = [];
  searchQuery: string = '';

  constructor(_CargarScript:CargarScriptsService,private documentService: DocumentService) {

    _CargarScript.Carga(['home/home']);

  }


  ngOnInit(): void {
    this.loadDocumentos();
  }

  loadDocumentos(): void {
    this.documentService.getDocumentos().subscribe(data => {
      this.documentos = data;
    });
  }

  getFilteredDocuments() {
    if (!this.searchQuery) {
      return this.documentos;
    }
    return this.documentos.filter(doc =>
      doc.titulo.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}

