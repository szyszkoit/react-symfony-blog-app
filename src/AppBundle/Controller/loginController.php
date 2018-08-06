<?php

namespace AppBundle\Controller;

use AppBundle\Entity\BlogUser;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\User\UserInterface;


class loginController extends Controller
{

    /**
     * @Route("/login", name="login")
     */
    public function loginAction(Request $request)
    {
        $user = $this->getUser();
        if ($user instanceof UserInterface) {
            return new Response(json_encode($user, true), 200);
        }

        /** @var AuthenticationException $exception */
        $exception = $this->get('security.authentication_utils')
            ->getLastAuthenticationError();
        $exception = $exception ? $exception->getMessage() : NULL;
        return new Response(json_encode($exception, true), 404);
    }

//    public function getAuthData(Request $request)
//    {
//
//        $req = $request->request->all();
//        $login = htmlentities($req["caseId"]);
//        $phoneNumber = intval(preg_replace('/[^0-9]/', '', $req["phoneNr"]));
//        $ip = $_SERVER['REMOTE_ADDR'];
//
//        $ems = $this->getDoctrine()->getManager()->createQueryBuilder()
//            ->from('AppBundle:LoginData', 'd')
//            ->select("d.logindataCasenumber, d.logindataPassword, d.logindataCaseid")
//            ->where("d.logindataCasenumber = '".$caseNumber."'
//                        AND d.logindataIp = '".$ip."'
//                        AND d.logindataPhone = '".$phoneNumber."'
//                        AND d.logindataStatus = '1'
//                        AND d.logindataExpiredate >= '".date("Y-m-d H:i:s")."'
//                        " )
//            ->getQuery();
//        $data = $ems->getArrayResult();
//
//        if ($data && $caseNumber && $phoneNumber) {
//            $data = array("caseId" => $caseNumber, "phoneNr" => $phoneNumber, "smsPass" => "OK");
//            return new Response(json_encode($data, true), 200);
//        }
//        else {
//            $postFields = array("CaseNumber" => $caseNumber, "PhoneNumber" => $phoneNumber);
//            $caseObj = new ApiInterface();
//            $caseObj->setUrl($this->getParameter('api_url') . "AskForSmsCode");
//            $caseObj->setPostFlag(1);
//            $caseObj->setPostFields($postFields);
//            $caseObj->rawApiConnector();
//            $response = json_decode($caseObj->getHttpResponse(), true);
//            if ($caseObj->getHttpCode() == 200 && $response["smsCode"]) {
//                $em = $this->getDoctrine()->getManager();
//                $loginData = new LoginData();
//                $loginData->setLogindataStartdate(new \DateTime(date('Y-m-d H:i:s'), (new \DateTimeZone('Europe/Warsaw'))));
//
//                $dateTime = new \DateTime((date("Y-m-d H:i:s")));
//                $dateTime->modify('+480 minutes');
//
//                $loginData->setLogindataExpiredate(new \DateTime($dateTime->format("Y-m-d H:i:s"), (new \DateTimeZone('Europe/Warsaw'))));
//                $loginData->setLogindataCaseid($response["caseId"]);
//                $loginData->setLogindataIp($request->getClientIp());
//                $loginData->setLogindataPassword($response["smsCode"]);
//                $loginData->setLogindataCasenumber($caseNumber);
//                $loginData->setLogindataPhone($phoneNumber);
//                $loginData->setLogindataStatus(1);
//                $loginData->setLogindataApiresponse($caseObj->getHttpResponse());
//                $em->persist($loginData);
//                $em->flush();
//
//                $data = array("caseId" => $caseNumber, "phoneNr" => $phoneNumber, "smsPass" => "OK");
//                return new Response(json_encode($data, true), 200);
//            } else {
//                $em = $this->getDoctrine()->getManager();
//                $loginData = new LoginData();
//                $loginData->setLogindataStartdate(new \DateTime(date('Y-m-d H:i:s'), (new \DateTimeZone('Europe/Warsaw'))));
//                $loginData->setLogindataExpiredate(new \DateTime(date('Y-m-d H:i:s'), (new \DateTimeZone('Europe/Warsaw'))));
//                $loginData->setLogindataCaseid(0);
//                $loginData->setLogindataIp($request->getClientIp());
//                $loginData->setLogindataCasenumber($caseNumber);
//                $loginData->setLogindataPhone($phoneNumber);
//                $loginData->setLogindataPassword("null");
//                $loginData->setLogindataStatus(0);
//                $loginData->setLogindataApiresponse('CODE:'.$caseObj->getHttpCode().' '.$caseObj->getHttpResponse());
//                $em->persist($loginData);
//                $em->flush();
//
//
//                $data = array("caseId" => $caseNumber, "phoneNr" => $phoneNumber, "smsPass" => "ERROR");
//                return new Response(json_encode($data, true), 404);
//            }
//        }
//    }

    /**
     * @Route("/logout", name="logout")
     */
    public function logoutAction() {

    }

}