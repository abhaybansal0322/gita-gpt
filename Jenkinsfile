pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/your-username/gitaGPT.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t gita-gpt .'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'docker run gita-gpt npm test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker run -d -p 3000:3000 gita-gpt'
            }
        }
    }
}