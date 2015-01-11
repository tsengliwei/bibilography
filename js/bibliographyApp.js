
      var model = {
          ArticleTitle: "",

          Contributors: {
            First: "",
            MI: "",
            Last: "",
            Suffix: ""
          },

          WebsiteTitle: "",
          PublisherOrSponsor: "",
          URL: "URL",
          DisplayURL: "no",

          PublishedDate: {
            day: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                  21, 22, 23, 24, 25, 26, 27, 28, 28, 30,
                  31],
            month: ["January", "February", "March", "April", "May", "June",
                    "July", "August", "Septempber", "October", "November", "Devember"],

            year: 1990
          },

          AccessDate: {
            day: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                  21, 22, 23, 24, 25, 26, 27, 28, 28, 30,
                  31],
            month: ["January", "February", "March", "April", "May", "June",
                    "July", "August", "Septempber", "October", "November", "Devember"],

            year: 2015
          }
      };

      var bibliographyApp = angular.module("bibliographyApp", []);

      bibliographyApp.controller("bibliographyCtrl", function ($scope) {
          $scope.data = model;

          $scope.publishedDateDay = "";
          $scope.publishedDateMonth ;
          $scope.PublishedDateYear = $scope.data.PublishedDate.year;

          $scope.AccessDateDay;
          $scope.AccessDateMonth;
          $scope.AccessDateYear = $scope.data.AccessDate.year;
          
          $scope.result = "";

          $scope.MLA = function (data) {

                var contributor = data.Contributors.Last + ", " + data.Contributors.First 
                                  + " " + data.Contributors.MI + "."; 

                var article = '"' + data.ArticleTitle + '." ';

                var website = data.WebsiteTitle + ". ";

                var publisher = data.PublisherOrSponsor;

                var pubDate;

                if (angular.isUndefined($scope.publishedDateDay) || 
                  angular.isUndefined($scope.publishedDateMonth)) {
                    pubDate = "N.d.";
                } else {
                  pubDate = $scope.publishedDateDay + " " + $scope.publishedDateMonth + ". "
                              + $scope.PublishedDateYear + ".";
                };
                  
                var asDate;

                 if (angular.isUndefined($scope.AccessDateDay) || 
                  angular.isUndefined($scope.AccessDateMonth)) {
                    asDate = "";
                } else {
                  asDate = $scope.AccessDateDay + " " + $scope.AccessDateMonth + ". "
                              + $scope.AccessDateYear + ".";
                }; 
                
                var result;

                if (data.Contributors.Last == "" || 
                    data.Contributors.First == "" ||
                    data.Contributors.MI == "" ||
                    data.ArticleTitle == "" ||
                    data.WebsiteTitle == "") {
                  result = "N.p." + " " + pubDate + " "
                              + "Web. " + asDate;
                } else {
                  result = contributor + " " + article + " " + data.WebsiteTitle + " " + pubDate + " "
                              + "Web. " + asDate;
                };

                if (data.DisplayURL == "yes") {
                    result = result + " <" + data.URL + ">.";
                };

                // result += ".";

                return result;
            }
      });

