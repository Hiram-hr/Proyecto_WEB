NGINXROOT="/usr/share/nginx/mirasahi/"
NOINSTALA="sql"
if [ "$EUID" != "0" ]
then
	echo "Necesitas permisos de administrador para instalar"
	exit 1
fi

if ! [ "$NGINXROOT" -ef "/" ]
then
	rm -rf "$NGINXROOT"/*
fi

for instala in ./*
do
	if ! [ "$instala" -ef "$0" ]
	then
		DECISION="i"
		for salta in $NOINSTALA
		do
			if [ "$instala" -ef "$salta" ]
			then
				DECISION="n"
				break
			fi
		done

		if [ $DECISION == "i" ]
		then
			cp -r "$instala" "$NGINXROOT"
		fi
	fi
done
