const iconMap: Record<string, string> = {
  'JavaScript': 'devicon-javascript-plain',
  'TypeScript': 'devicon-typescript-plain',
  'Python': 'devicon-python-plain',
  'Node.js': 'devicon-nodejs-plain',
  'NestJS': 'devicon-nestjs-plain',
  'Express.js': 'devicon-express-original',
  'PostgreSQL': 'devicon-postgresql-plain',
  'MySQL': 'devicon-mysql-plain',
  'MongoDB': 'devicon-mongodb-plain',
  'TypeORM': 'devicon-sequelize-plain',
  'REST APIs': 'devicon-code-plain',
  'Microservicios': 'devicon-code-plain',
  'Maps': 'devicon-googlemaps-plain',
  'MUI': 'devicon-materialui-plain',
  'Material UI': 'devicon-materialui-plain',
  'Docker': 'devicon-docker-plain',
  'OCR': 'devicon-tesseract-plain',
  'PLN': 'devicon-python-plain',
  'Nodemailer': 'devicon-npm-original-wordmark',
  'OpenVidu': 'devicon-webrtc-plain',
  'WebRTC': 'devicon-webrtc-plain',
  'Swagger': 'devicon-swagger-plain',
  'PHP': 'devicon-php-plain',
  'CodeIgniter': 'devicon-codeigniter-plain',
  'RabbitMQ': 'devicon-rabbitmq-plain',
  'Vue.js': 'devicon-vuejs-plain',
  'Vuetify': 'devicon-vuetify-plain',
  'Next.js': 'devicon-nextjs-plain',
  'React': 'devicon-react-original',
  'PM2': 'devicon-linux-plain',
  'Nginx': 'devicon-nginx-plain',
  'Linux': 'devicon-linux-plain',
  'Jest': 'devicon-jest-plain',
  'CI/CD': 'devicon-jenkins-plain',
  'Git': 'devicon-git-plain'
};

const FALLBACK = 'devicon-code-plain';

export function getTechIcon(techName: string): string {
  return iconMap[techName] || FALLBACK;
}
