
pipeline {
    agent any

    stages {
        stage('Docker Build') {
            steps {
                sh "docker image prune -f"
                sh "docker images"
                sh "docker-compose -f ./docker-compose.prod.yml build"
                sh "docker tag lux_api midasdesignlux.azurecr.io/lux_api"
                sh "docker tag lux_frontend midasdesignlux.azurecr.io/lux_frontend"
                sh "docker tag lux_proxy midasdesignlux.azurecr.io/lux_proxy"
                sh "docker tag lux_api midasdesignlux.azurecr.io/lux_api:1"
                sh "docker tag lux_frontend midasdesignlux.azurecr.io/lux_frontend:1"
                sh "docker tag lux_proxy midasdesignlux.azurecr.io/lux_proxy:1"
            }
        }
        stage("Docker Push") {
            steps{
                withCredentials([usernamePassword(credentialsId: 'AzureSP', passwordVariable: 'AZURE_CLIENT_SECRET', usernameVariable: 'AZURE_CLIENT_ID')]) {
                    sh 'az login --service-principal -u $AZURE_CLIENT_ID -p $AZURE_CLIENT_SECRET -t ${tenant_id}'
                    sh 'az account set -s ${subscription_id}'
                    sh 'az acr login --name midasdesignlux'
                    sh "docker push midasdesignlux.azurecr.io/lux_frontend"
                    sh "docker push midasdesignlux.azurecr.io/lux_api"
                    sh "docker push midasdesignlux.azurecr.io/lux_proxy"
                    sh "docker push midasdesignlux.azurecr.io/lux_api:1"
                    sh "docker push midasdesignlux.azurecr.io/lux_frontend:1"
                    sh "docker push midasdesignlux.azurecr.io/lux_proxy:1"
                }
            }
        }
        stage("cleanup") {
            steps{
                sh "az logout"
            }
        }

    }
}
