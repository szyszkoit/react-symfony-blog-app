<?php

namespace AppBundle\Controller;

use AppBundle\Entity\BlogUser;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\HttpFoundation\Session\Session;


class postsController extends Controller
{

    /**
     * @Route("/getposts", name="getposts")
     */
    public function getPostsAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $query = $em->createQuery(
            "SELECT c FROM AppBundle:BlogPosts c"
        );
        $result = $query->getArrayResult();
        return new Response(json_encode($result, true),200);
    }

}