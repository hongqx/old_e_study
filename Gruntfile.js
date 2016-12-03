module.exports = function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		concat:{
		 	options:{
		 		separator:"/*--------*/\n",
		 		banner:'/*!<%= pkg.name %>\n *version <%= pkg.version %>\n *<%= grunt.template.today("yyyy-mm-dd  hh:MM:ss") %>\n *<%= pkg.description %>\n */\n',
		 		footer:''
		 	},
		 	dist:{
                files : {
                	'js/control.js':['js/localstorage.js','js/videoPlayer.js','js/subtitle.js','js/contentControl.js']
                } 
		 	}
		},
		uglify : {
	   		options:{
	   			//定义banner注释，将插入到输出的文件顶部
	   			banner:'/*! <%= pkg.name %> version<%= pkg.version %>  <%= grunt.template.today("yyyy-mm-dd  hh:MM:ss")%>*/\n',
	   			mangle:{
	   				except:['$scope','userController']//压缩的时候忽略这几个字符
	   			}
	   		},
	   		dist:{
	   			files: {
                    'build/js/control.min.js':['js/control.js']
	   			}
	   		}
	   	}/*,
	   	cssmin : {
	   		options:{
	   			//定义banner注释，将插入到输出的文件顶部
	   			banner:''
	   		},
	   		dist : {
	   			src : "css/yxgstyle.css",
	   			dest : 'build/css/yxgstyle.min.css'
	   		}
	   	}*/
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-css');
    //注册任务
	grunt.registerTask('default',['concat','uglify']);
};
