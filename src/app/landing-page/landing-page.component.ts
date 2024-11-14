import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  isNavOpen = false;
  featuredProducts = [
    { name: "Banda de Resistencia Profesional", description: "Diseñada para optimizar tu recuperación y mejorar tu rendimiento físico.", image: "assets/bandas.webp" },
    { name: "Rodillo de Espuma para Masajes", description: "Ideal para aliviar la tensión muscular y mejorar la flexibilidad.",  image: "assets/rollo.webp" },
    { name: "Balón de Ejercicio Antideslizante", description: "Perfecto para ejercicios de estabilidad y fortalecimiento del core.", image: "assets/balon.webp"}
  ];

  testimonials = [
    { name: "María G.", comment: "Los productos son de excelente calidad y han acelerado mi recuperación." },
    { name: "Carlos R.", comment: "El servicio al cliente es excepcional. Siempre están dispuestos a ayudar." },
    { name: "Laura M.", comment: "Gracias a estos productos, he podido continuar con mi rutina de ejercicios en casa." }
  ];

  instructionalVideos = [
    { id: "video1", title: "Cómo usar la banda de resistencia", description: "Aprende a utilizar correctamente la banda de resistencia para maximizar tus ejercicios.", thumbnail: "assets/bandasvideo.jpg" },
    { id: "video2", title: "Técnicas de masaje con rodillo", description: "Descubre las mejores técnicas para aliviar la tensión muscular con nuestro rodillo de espuma.", thumbnail: "assets/rodillovideo.jpg" },
    { id: "video3", title: "Ejercicios de estabilidad con balón", description: "Mejora tu equilibrio y fortalece tu core con estos ejercicios utilizando el balón de ejercicio.", thumbnail: "assets/balonvideo.webp" }
  ];

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  playVideo(videoId: string) {
    // Aquí puedes implementar la lógica para reproducir el video
    console.log(`Reproduciendo video: ${videoId}`);
    // Por ejemplo, podrías abrir un modal con un reproductor de video embebido
  }
}