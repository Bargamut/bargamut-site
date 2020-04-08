pipeline {
  agent {
		label 'master'
	}

  stages {
		stage('Tests') {
			stages {
				stage("Start tests") {
					environment {
						CI_NODE_VERSION = '12.11.0'
					}
					steps{
							echo "====++++executing Start tests++++===="
							sh 'echo "$HOME"'
							sh 'scripts/set-nvm.sh'
							sh 'npm run test'
					}
					post{
							always{
									echo "====++++always++++===="
							}
							success{
									echo "====++++Start tests executed successfully++++===="
									sh 'npm run coverage'
							}
							failure{
									echo "====++++Start tests execution failed++++===="
							}
					}
				}
			}
		}
    stage('Build & deploy') {
			when {
				branch 'master'
			}
			stages {
				stage('Build Docker container') {
					steps {
						sh 'scripts/build-container.sh'
					}
				}

				stage('Delivery') {
					steps {
						sh 'scripts/delivery.sh'
					}
				}

				stage('Clean Docker images') {
					steps {
						sh 'scripts/clean-images.sh'
					}
				}
			}
    }
  }
}