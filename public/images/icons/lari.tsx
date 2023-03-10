interface ILari {
  color: string;
  classes?: string;
  width?: number;
  height?: number;
}

function lari({color, classes, width = 13, height = 14}: ILari) {
  return (
      <svg className={`${classes}`} width={width} height={height} viewBox="0 0 13 14" fill={color}
           xmlns="http://www.w3.org/2000/svg">
        <path
            d="M5.84432 1L5.01898 1.77024L4.91621 1.85784L4.91943 2.94205L4.80847 2.97443L4.71742 3.00381L4.62109 3.03129L4.54819 3.06067L4.46387 3.09142L4.37106 3.12379L4.2882 3.16079L4.20359 3.19453L4.12747 3.22854L4.06276 3.25629L3.98313 3.29629L3.92018 3.3303L3.85547 3.36403L3.77613 3.40403L3.71289 3.4364L3.62184 3.48728L3.52229 3.54741L3.41484 3.61515L3.33198 3.66576L3.23742 3.73215L3.17769 3.77513L3.10157 3.83064L3.03189 3.88151L2.95723 3.93702L2.8893 3.98789L2.83631 4.03714L2.77161 4.09237L2.65391 4.19576L2.60267 4.24174L2.5611 4.282L2.50488 4.33261L2.43696 4.40063L2.37226 4.46511L2.33097 4.51598L2.27944 4.56822L2.23319 4.62536L2.18663 4.68086L2.14184 4.73609L2.09558 4.7886L2.054 4.84084L2.01097 4.89036L1.97788 4.93634L1.93982 4.99347L1.9 5.0536L1.86516 5.09659L1.83208 5.14284L1.78055 5.21983L1.75742 5.26445L1.72931 5.31071L1.68949 5.37083L1.65817 5.41681L1.63972 5.46307L1.60166 5.52319L1.56536 5.58468L1.52554 5.66032L1.49567 5.73106L1.46259 5.80642L1.42921 5.86981L1.40286 5.92504L1.37798 5.9898L1.33992 6.06979L1.31005 6.15304L1.26701 6.27166L1.24359 6.34403L1.21724 6.42566L1.19411 6.50102L1.1742 6.57666L1.12267 6.78588L1.1095 6.85063L1.08783 6.92627L1.0729 7.0185L1.06295 7.08026L1.04802 7.17712L1.03338 7.2835L1.01845 7.45273L1.00673 7.57135L1.00176 7.66222L1 7.7716L1.00176 8.03795L1.00498 8.12583L1.01493 8.25207L1.02342 8.35519L1.03162 8.42919L1.03982 8.50782L1.04802 8.57094L1.06295 8.64957L1.07466 8.72494L1.08637 8.79268L1.1013 8.86043L1.11448 8.91892L1.13439 9.00054L1.15254 9.07156L1.16923 9.14393L1.19558 9.22228L1.21724 9.30254L1.23861 9.37029L1.25852 9.42879L1.28019 9.49653L1.30508 9.55965L1.32996 9.6274L1.35807 9.69351L1.38295 9.75201L1.40608 9.80288L1.4377 9.87526L1.46903 9.94627L1.50387 10.0124L1.53374 10.0785L1.5636 10.1326L1.59346 10.1819L1.6283 10.2526L1.65963 10.3065L1.69125 10.362L1.72609 10.4175L1.74746 10.4529L1.76913 10.4866L1.80046 10.5345L1.82886 10.5791L1.85521 10.6177L1.88683 10.6577L1.91318 10.7007L1.95475 10.7592L1.99106 10.8085L2.03087 10.858L2.05898 10.898L2.0906 10.9363L2.13042 10.9842L2.1635 11.0242L2.20976 11.0765L2.26803 11.1412L2.31604 11.1997L2.37226 11.2568L2.41383 11.3044L2.45833 11.3461L2.51162 11.3983L2.55963 11.4478L2.60765 11.4925L2.64395 11.5248L2.68875 11.5632L2.7353 11.6064L2.77512 11.6402L2.81816 11.6772L2.853 11.7079L2.89926 11.7449L2.9423 11.7819L2.98065 11.8064L3.0152 11.8374L3.0518 11.8636L3.08166 11.8834L3.11474 11.9082L3.15456 11.9376L3.19262 11.965L3.2342 11.9928L3.2787 12.0235L3.31852 12.0513L3.34662 12.0684L3.37005 12.0853L3.3964 12.1022L3.4248 12.1207L3.44939 12.1362L3.47105 12.1468H1.91991L1.00176 13H10.2293L11.1442 12.1468L6.33473 12.1454L6.2305 12.1438L6.10431 12.1315L5.9222 12.1177L5.75473 12.0869L5.62562 12.0652L5.49123 12.036L5.37529 12.0129L5.24764 11.9835L5.16302 11.9604L5.02893 11.9158L4.91446 11.8774L4.81667 11.8451L4.72561 11.8097L4.63105 11.7651L4.54497 11.7264L4.434 11.6788L4.32451 11.6233L4.22672 11.5694L4.13244 11.5169L4.061 11.4739L3.96819 11.4231L3.88358 11.3646L3.81068 11.3213L3.73953 11.2721L3.65843 11.209L3.57558 11.1475L3.49096 11.0781L3.40986 11.0133L3.32349 10.935L3.24415 10.8626L3.1894 10.8131L3.1247 10.7407L3.07346 10.6901L3.02193 10.6392L2.95723 10.5652L2.88608 10.4836C2.88608 10.4836 2.82313 10.4052 2.82313 10.399C2.82313 10.3928 2.76165 10.3266 2.76165 10.3266L2.69226 10.2295L2.63576 10.1525L2.57954 10.0709L2.52655 9.98626L2.48175 9.91525L2.44369 9.84451L2.38719 9.74738L2.34415 9.65515L2.30257 9.56564L2.25631 9.47341L2.22469 9.40403L2.19834 9.34091L2.17024 9.26092L2.13188 9.14991L2.09236 9.03292L2.05254 8.90205L2.02765 8.78969L2.00101 8.66644L1.97613 8.56169L1.95973 8.43681L1.94626 8.31982L1.93309 8.18732L1.92665 8.11033L1.91991 8.02109V7.93946L1.92167 7.86247L1.92665 7.78248L1.92987 7.6546L1.93631 7.55911L1.94128 7.45899L1.94978 7.38961L1.96295 7.29411L1.97788 7.2065L1.98959 7.11699L2.00599 7.04163L2.02765 6.94776L2.04405 6.87077L2.05898 6.81227L2.08065 6.73527L2.10378 6.66889L2.13042 6.57666L2.15677 6.51027L2.19161 6.41804L2.22469 6.33179L2.25807 6.25616L2.29438 6.16066L2.34093 6.06843L2.37401 6.01292L2.41207 5.93756L2.45511 5.8573L2.48995 5.79717L2.53797 5.71881L2.59272 5.64019L2.62932 5.5787L2.67235 5.5202L2.7353 5.43532L2.78829 5.36458L2.83631 5.29846L2.88608 5.2367L2.92912 5.1812L2.96894 5.13957L3.01695 5.09033L3.05502 5.04571L3.09161 5.00871L3.13641 4.96735L3.17447 4.92409L3.23068 4.87648L3.28046 4.82859L3.38 4.73936L3.41484 4.70535L3.4611 4.66698L3.50765 4.62835L3.54893 4.59298L3.59871 4.55299L3.65668 4.51136L3.71143 4.473L3.76618 4.43273L3.82239 4.40063L3.89031 4.35274L3.95502 4.30975L4.0247 4.26813L4.07418 4.23412L4.14064 4.19875L4.20037 4.16474L4.24487 4.13726L4.30138 4.11413L4.34441 4.08938L4.40238 4.06162L4.46709 4.03088L4.53179 4.00313L4.56985 3.98164L4.63105 3.96014L4.68404 3.93838L4.74552 3.91226L4.79529 3.8924L4.84477 3.87389L4.89308 3.85839L4.91943 3.8475V7.86247L5.84256 7.00789L5.84432 3.62577L5.85574 3.62114L5.89556 3.61515L5.94211 3.61053L6.00506 3.60128L6.06625 3.59665L6.10519 3.59529L6.10607 3.59584L6.12188 3.59747L6.19888 3.58958L6.28173 3.58495L6.38186 3.58196L6.69104 3.58033L6.80376 3.58577L6.89979 3.59203L6.97211 3.59801L7.04091 3.60509L7.11528 3.61352L7.1709 3.62114L7.22068 3.6274L7.22214 7.8641L8.14791 7.00925V3.85077L8.16196 3.85458L8.19329 3.86682L8.2372 3.88315L8.29605 3.90301L8.33675 3.92151L8.39648 3.94545L8.46264 3.9732L8.52413 4.00095L8.58444 4.02925L8.6509 4.05945L8.72439 4.09563L8.7768 4.12094L8.82306 4.14406L8.86199 4.16882L8.90767 4.19331L8.94485 4.21181L8.99287 4.24174L9.03444 4.26731L9.08509 4.29588L9.12901 4.32336L9.17293 4.35274L9.21743 4.38267L9.26135 4.41124L9.31287 4.44742L9.36001 4.48143L9.39661 4.50837L9.43555 4.53748L9.47771 4.56822L9.52338 4.60305L9.57813 4.65066L9.62527 4.68848L9.67006 4.72847L9.71896 4.76847L9.76697 4.81472L9.80328 4.84247L9.83724 4.87648L9.89199 4.93035L9.93942 4.97715L9.97163 5.01197L10.0056 5.04734L10.0562 5.10039L10.1092 5.16052L10.154 5.21058L10.1795 5.24759L10.212 5.29139L10.2524 5.33927L10.2849 5.38008L10.3162 5.4209L10.347 5.46225L10.3836 5.51231L10.4149 5.55938L10.4439 5.59937L10.4696 5.63474L10.496 5.67338L10.5218 5.71174L10.5458 5.755L10.5674 5.79418L10.5947 5.84125L10.6187 5.87743L10.6371 5.91198L10.6585 5.95443L10.6775 5.98517L10.696 6.02054L10.7249 6.07768L10.7539 6.13998L10.7703 6.17236L10.7861 6.20691L10.8019 6.24092L10.816 6.27547L10.8327 6.31873L10.8467 6.35329L10.8667 6.39165L10.8798 6.42321L10.8907 6.45477L10.9056 6.49721L10.9155 6.52741L10.9296 6.56877L10.9428 6.61366L10.9577 6.65882L10.975 6.70589L10.9917 6.76765L11.0066 6.81826L11.0265 6.90151L11.0373 6.9445L11.0488 6.99238L11.0619 7.05714L11.0654 7.06938L11.0745 7.12026L11.0868 7.18038L11.0953 7.24568L11.1044 7.31043L11.1152 7.39287L11.1243 7.46824L11.1307 7.55748L11.1366 7.63692L11.1433 7.74085L11.1474 7.85784L11.9985 7.06693L12 7.05251L11.995 7.0185L11.9877 6.97633L11.9795 6.93225L11.9728 6.8977L11.9628 6.84465L11.9502 6.79839L11.942 6.75514L11.9221 6.6814L11.9122 6.64195L11.899 6.59434L11.8832 6.54047L11.87 6.49558L11.8568 6.4496L11.8442 6.4126L11.8311 6.36934L11.8144 6.32091L11.7971 6.27003L11.774 6.20609L11.7555 6.15549L11.7383 6.10597L11.7175 6.05836L11.7002 6.01755L11.6785 5.95824L11.6572 5.9128L11.6378 5.87281L11.6156 5.82356L11.5939 5.77813L11.5676 5.72017L11.5459 5.67474L11.5219 5.63338L11.4955 5.58169L11.4739 5.54251L11.4466 5.49L11.4232 5.45082L11.3992 5.4092L11.372 5.36458L11.3404 5.31533L11.3114 5.26527L11.2859 5.22582L11.2593 5.18283L11.2335 5.14583L11.2072 5.10203L11.1831 5.0672L11.1533 5.02802L11.1325 4.99728L11.1108 4.97116L11.0786 4.92491L11.0455 4.88165L11.0166 4.8441L10.9899 4.80928L10.9586 4.7701L10.9261 4.73092L10.893 4.69147L10.874 4.66535L10.8441 4.63379L10.8251 4.6123L10.7929 4.5753L10.763 4.5421L10.7299 4.50592L10.6793 4.45041L10.6371 4.4058L10.5982 4.36961L10.5607 4.33125L10.5194 4.29261L10.4588 4.23493L10.4067 4.1895L10.3637 4.15032L10.3113 4.10244L10.2641 4.06026L10.2225 4.02789L10.1681 3.98L10.1224 3.94545L10.0843 3.91307L10.0337 3.87689L9.99066 3.84451L9.94089 3.80669L9.89287 3.77377L9.83988 3.7384L9.79274 3.70739L9.73887 3.66821L9.68734 3.6342L9.64606 3.6059L9.60273 3.57979L9.55734 3.55258L9.50582 3.52265L9.45136 3.49027L9.40159 3.45953L9.35855 3.43559L9.30702 3.40947L9.26135 3.38471L9.21011 3.35941L9.15624 3.3303L9.10998 3.30771L9.05611 3.28159L9.0037 3.25765L8.95744 3.23616L8.89274 3.20786L8.83477 3.18229L8.77504 3.15617L8.70126 3.12624L8.64592 3.10366L8.5821 3.08081L8.52735 3.06067L8.4767 3.0438L8.42195 3.0253L8.34846 2.99918L8.29371 2.98286L8.23164 2.963L8.18099 2.94912L8.14937 2.94368L8.14791 1.00245L7.22068 1.85947L7.22126 2.76112L7.1469 2.75024L7.04823 2.73963L6.96947 2.73174L6.83684 2.72249L6.71358 2.71868L6.64068 2.7165L6.46326 2.71813L6.34732 2.71949L6.21205 2.72412L6.11836 2.72874L6.09377 2.73419L6.09348 2.73446L6.01325 2.74044L5.9304 2.74643L5.87243 2.75731L5.84579 2.76792L5.84432 1Z"
            strokeWidth="0.6" stroke={color}/>
      </svg>

      // <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      //   <path d="M6.96224 1L5.94644 1.93529L5.81995 2.04166L5.82391 3.3582L5.68735 3.39752L5.57529 3.4332L5.45673 3.46657L5.367 3.50224L5.26322 3.53958L5.149 3.57889L5.04702 3.62382L4.94288 3.66479L4.84919 3.70608L4.76955 3.73978L4.67154 3.78835L4.59407 3.82965L4.51442 3.87061L4.41678 3.91918L4.33894 3.95849L4.22688 4.02027L4.10436 4.09328L3.97211 4.17554L3.87013 4.23699L3.75375 4.31761L3.68023 4.3698L3.58655 4.43721L3.50079 4.49898L3.4089 4.56638L3.32529 4.62815L3.26007 4.68796L3.18044 4.75502L3.03558 4.88057L2.97252 4.9364L2.92135 4.98529L2.85216 5.04674L2.76857 5.12934L2.68894 5.20763L2.63812 5.2694L2.5747 5.33284L2.51777 5.40222L2.46047 5.46962L2.40534 5.53668L2.34841 5.60044L2.29723 5.66388L2.24427 5.72401L2.20354 5.77984L2.1567 5.84921L2.10769 5.92223L2.06481 5.97443L2.0241 6.03059L1.96068 6.12408L1.93221 6.17826L1.89761 6.23443L1.8486 6.30744L1.81006 6.36327L1.78735 6.41944L1.7405 6.49244L1.69583 6.56711L1.64682 6.65896L1.61006 6.74486L1.56934 6.83637L1.52826 6.91334L1.49583 6.98041L1.46521 7.05904L1.41836 7.15617L1.3816 7.25726L1.32863 7.4013L1.2998 7.48918L1.26737 7.5883L1.2389 7.67981L1.2144 7.77166L1.15098 8.02571L1.13477 8.10434L1.1081 8.19619L1.08972 8.30818L1.07748 8.38317L1.0591 8.50079L1.04108 8.62996L1.02271 8.83546L1.00828 8.9795L1.00217 9.08984L1 9.22266L1.00217 9.54608L1.00613 9.65279L1.01838 9.80609L1.02882 9.9313L1.03892 10.0212L1.04901 10.1166L1.0591 10.1933L1.07748 10.2888L1.09189 10.3803L1.1063 10.4625L1.12468 10.5448L1.1409 10.6158L1.1654 10.7149L1.18774 10.8012L1.20828 10.8891L1.24071 10.9842L1.26737 11.0817L1.29367 11.1639L1.31818 11.235L1.34485 11.3172L1.37548 11.3939L1.4061 11.4761L1.4407 11.5564L1.47132 11.6274L1.49979 11.6892L1.53871 11.7771L1.57727 11.8633L1.62015 11.9436L1.65691 12.0239L1.69366 12.0896L1.73041 12.1495L1.77329 12.2353L1.81185 12.3008L1.85077 12.3681L1.89365 12.4355L1.91995 12.4785L1.94662 12.5194L1.98518 12.5776L2.02014 12.6318L2.05257 12.6786L2.09148 12.7272L2.12391 12.7794L2.17508 12.8505L2.21977 12.9103L2.26876 12.9704L2.30336 13.019L2.34228 13.0655L2.39129 13.1237L2.432 13.1722L2.48894 13.2358L2.56065 13.3143L2.61974 13.3854L2.68894 13.4547L2.7401 13.5125L2.79487 13.5631L2.86046 13.6265L2.91954 13.6866L2.97865 13.7409L3.02332 13.7801L3.07846 13.8267L3.13575 13.8792L3.18476 13.9202L3.23774 13.9652L3.28062 14.0024L3.33755 14.0474L3.39052 14.0923L3.43772 14.1221L3.48025 14.1597L3.52529 14.1915L3.56204 14.2156L3.60276 14.2457L3.65177 14.2814L3.69861 14.3146L3.74978 14.3484L3.80455 14.3857L3.85356 14.4194L3.88815 14.4402L3.91698 14.4607L3.94942 14.4812L3.98437 14.5037L4.01463 14.5225L4.04129 14.5354H2.1322L1.00217 15.5714H12.3591L13.4852 14.5354L7.56582 14.5337L7.43754 14.5318L7.28223 14.5168L7.05809 14.5001L6.85198 14.4627L6.69307 14.4363L6.52767 14.4009L6.38497 14.3728L6.22786 14.3371L6.12372 14.3091L5.95868 14.2549L5.8178 14.2083L5.69744 14.1691L5.58537 14.1261L5.46899 14.0719L5.36304 14.0249L5.22646 13.9671L5.0917 13.8997L4.97135 13.8343L4.85531 13.7705L4.76738 13.7183L4.65316 13.6566L4.54902 13.5856L4.4593 13.533L4.37173 13.4733L4.27191 13.3966L4.16994 13.322L4.0658 13.2377L3.96598 13.159L3.85968 13.0639L3.76203 12.976L3.69465 12.9159L3.61502 12.828L3.55195 12.7666L3.48853 12.7047L3.4089 12.6149L3.32133 12.5158C3.32133 12.5158 3.24385 12.4206 3.24385 12.4131C3.24385 12.4055 3.16818 12.3252 3.16818 12.3252L3.08278 12.2072L3.01324 12.1138L2.94405 12.0147L2.87883 11.9119L2.82369 11.8257L2.77685 11.7398L2.70731 11.6218L2.65434 11.5098L2.60316 11.4011L2.54623 11.2891L2.50731 11.2049L2.47488 11.1282L2.4403 11.0311L2.39308 10.8963L2.34444 10.7543L2.29543 10.5953L2.2648 10.4589L2.23201 10.3092L2.20139 10.1821L2.18121 10.0304L2.16463 9.88835L2.14842 9.72746L2.14049 9.63397L2.1322 9.52561V9.42649L2.13436 9.333L2.14049 9.23587L2.14446 9.08059L2.15238 8.96463L2.1585 8.84306L2.16896 8.75881L2.18517 8.64285L2.20354 8.53646L2.21796 8.42777L2.23814 8.33627L2.2648 8.22228L2.28498 8.12879L2.30336 8.05776L2.33003 7.96426L2.3585 7.88365L2.39129 7.77166L2.42372 7.69104L2.4666 7.57905L2.50731 7.47432L2.54839 7.38248L2.59308 7.26652L2.65038 7.15452L2.69109 7.08712L2.73793 6.99561L2.7909 6.89815L2.83378 6.82514L2.89289 6.72998L2.96027 6.63452L3.00532 6.55985L3.05828 6.48881L3.13575 6.38575L3.20097 6.29985L3.26007 6.21956L3.32133 6.14456L3.3743 6.07717L3.42331 6.02662L3.4824 5.96683L3.52926 5.91265L3.57429 5.86772L3.62943 5.8175L3.67627 5.76497L3.74545 5.70715L3.80672 5.649L3.92923 5.54065L3.97211 5.49935L4.02905 5.45276L4.08634 5.40585L4.13714 5.3629L4.19841 5.31434L4.26976 5.26379L4.33714 5.21721L4.40453 5.16832L4.47371 5.12934L4.5573 5.07118L4.63695 5.01898L4.72271 4.96844L4.78361 4.92715L4.8654 4.8842L4.93892 4.8429L4.99369 4.80953L5.06324 4.78144L5.1162 4.75139L5.18754 4.71768L5.26719 4.68035L5.34682 4.64666L5.39366 4.62056L5.46899 4.59446L5.5342 4.56803L5.60987 4.53632L5.67113 4.5122L5.73202 4.48972L5.79148 4.4709L5.82391 4.45768V9.333L6.96007 8.2953L6.96224 4.18844L6.9763 4.18281L7.0253 4.17554L7.0826 4.16993L7.16007 4.1587L7.23538 4.15307L7.28331 4.15142L7.28439 4.15209L7.30385 4.15407L7.39862 4.14449L7.50059 4.13887L7.62383 4.13524L8.00436 4.13326L8.14309 4.13986L8.26128 4.14746L8.35029 4.15473L8.43497 4.16332L8.5265 4.17356L8.59495 4.18281L8.65622 4.19041L8.65802 9.33498L9.79743 8.29695V4.46165L9.81472 4.46628L9.85328 4.48114L9.90732 4.50097L9.97975 4.52508L10.0298 4.54755L10.1034 4.57662L10.1848 4.61031L10.2605 4.64401L10.3347 4.67838L10.4165 4.71505L10.5069 4.75898L10.5714 4.78971L10.6284 4.81779L10.6763 4.84785L10.7325 4.87759L10.7783 4.90006L10.8374 4.9364L10.8885 4.96745L10.9509 5.00214L11.0049 5.03551L11.059 5.07118L11.1138 5.10753L11.1678 5.14222L11.2312 5.18615L11.2892 5.22745L11.3343 5.26016L11.3822 5.29551L11.4341 5.33284L11.4903 5.37513L11.5577 5.43294L11.6157 5.47887L11.6708 5.52743L11.731 5.576L11.7901 5.63216L11.8348 5.66586L11.8766 5.70715L11.944 5.77257L12.0024 5.8294L12.042 5.87168L12.0838 5.91463L12.1461 5.97904L12.2113 6.05206L12.2665 6.11285L12.2978 6.15779L12.3378 6.21097L12.3876 6.26911L12.4276 6.31867L12.4661 6.36824L12.504 6.41845L12.549 6.47923L12.5876 6.53639L12.6233 6.58495L12.6549 6.6279L12.6874 6.67482L12.7191 6.7214L12.7487 6.77393L12.7753 6.8215L12.8089 6.87866L12.8384 6.92259L12.861 6.96455L12.8874 7.01609L12.9108 7.05342L12.9335 7.09637L12.9691 7.16575L13.0048 7.2414L13.025 7.28072L13.0444 7.32268L13.0639 7.36397L13.0812 7.40593L13.1018 7.45846L13.119 7.50042L13.1436 7.547L13.1598 7.58533L13.1732 7.62365L13.1915 7.67518L13.2037 7.71185L13.221 7.76208L13.2373 7.81659L13.2556 7.87142L13.2769 7.92858L13.2975 8.00358L13.3158 8.06503L13.3403 8.16612L13.3536 8.21832L13.3678 8.27646L13.3839 8.3551L13.3882 8.36996L13.3994 8.43174L13.4145 8.50475L13.425 8.58404L13.4362 8.66267L13.4495 8.76277L13.4607 8.85429L13.4686 8.96265L13.4758 9.05912L13.4841 9.18532L13.4891 9.32738L14.5366 8.36699L14.5385 8.34948L14.5323 8.30818L14.5233 8.25697L14.5132 8.20345L14.505 8.16149L14.4927 8.09707L14.4772 8.0409L14.4671 7.98838L14.4426 7.89884L14.4304 7.85094L14.4142 7.79313L14.3947 7.72771L14.3785 7.6732L14.3622 7.61737L14.3467 7.57244L14.3306 7.51991L14.31 7.4611L14.2887 7.39932L14.2603 7.32168L14.2375 7.26024L14.2164 7.20011L14.1908 7.14229L14.1695 7.09274L14.1428 7.02072L14.1166 6.96554L14.0927 6.91698L14.0654 6.85718L14.0386 6.80202L14.0063 6.73164L13.9796 6.67647L13.95 6.62625L13.9175 6.56348L13.891 6.5159L13.8574 6.45214L13.8286 6.40457L13.799 6.35403L13.7655 6.29985L13.7266 6.24004L13.691 6.17926L13.6596 6.13135L13.6268 6.07915L13.5951 6.03422L13.5627 5.98104L13.533 5.93874L13.4964 5.89117L13.4708 5.85384L13.4441 5.82212L13.4044 5.76596L13.3637 5.71343L13.3281 5.66784L13.2953 5.62555L13.2567 5.57798L13.2167 5.5304L13.176 5.4825L13.1526 5.45078L13.1158 5.41246L13.0924 5.38636L13.0528 5.34144L13.016 5.30112L12.9753 5.25719L12.913 5.18978L12.861 5.13561L12.8132 5.09167L12.767 5.04509L12.7162 4.99817L12.6416 4.92813L12.5775 4.87296L12.5246 4.82539L12.4601 4.76725L12.402 4.71603L12.3508 4.67672L12.2838 4.61857L12.2276 4.57662L12.1807 4.5373L12.1184 4.49337L12.0654 4.45405L12.0042 4.40812L11.9451 4.36815L11.8799 4.3252L11.8218 4.28755L11.7555 4.23997L11.6921 4.19867L11.6413 4.16431L11.588 4.1326L11.5321 4.09956L11.4687 4.06322L11.4017 4.0239L11.3404 3.98657L11.2874 3.9575L11.224 3.92579L11.1678 3.89572L11.1048 3.865L11.0385 3.82965L10.9815 3.80222L10.9152 3.7705L10.8507 3.74143L10.7938 3.71534L10.7141 3.68097L10.6428 3.64992L10.5693 3.61821L10.4785 3.58186L10.4104 3.55444L10.3318 3.5267L10.2644 3.50224L10.2021 3.48176L10.1347 3.45929L10.0443 3.42758L9.97687 3.40776L9.90048 3.38364L9.83814 3.36679L9.79922 3.36018L9.79743 1.00297L8.65622 2.04364L8.65694 3.1385L8.56542 3.12529L8.44398 3.11241L8.34704 3.10283L8.1838 3.0916L8.0321 3.08697L7.94238 3.08432L7.72401 3.0863L7.58132 3.08795L7.41483 3.09357L7.29952 3.09918L7.26926 3.1058L7.2689 3.10613L7.17015 3.11339L7.06818 3.12066L6.99684 3.13388L6.96405 3.14676L6.96224 1Z" fill="#E35A43" stroke="#E35A43" stroke-width="0.6"/>
      // </svg>

  );
}


export default lari;