pipeline {

    agent any

    options {
        buildDiscarder(logRotator(numToKeepStr: '15'))
    }

    stages {
        stage('Build') {
            steps {
                echo "Building Docker image..."
            }
        }

        stage('Deploy to DEV') {
            steps {
                echo "Deploying to DEV..."
            }
        }
        stage('Test DEV') {
            steps {
                echo "Deploying to DEV..."
            }
        }

        stage('Promote to UAT?') {
            steps {
                input('Promote to UAT?')
            }
        }

        stage('Deploy to UAT') {
            steps {
                echo "Deploying to UAT..."
            }
        }
        stage('Test UAT') {
            steps {
                echo "Deploying to UAT..."
            }
        }

        stage('Promote to PROD?') {
            steps {
                input('Promote to PROD?')
            }
        }

        stage('Deploy to PROD') {
            steps {
                echo "Deploying to PROD..."
            }
        }
        stage('Test PROD') {
            steps {
                echo "Deploying to PROD..."
            }
        }
    }
}