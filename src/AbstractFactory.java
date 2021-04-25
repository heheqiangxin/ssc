public interface AbstractFactory {
    Phone createPhone(String param);
    Computer createComputer(String param);
    HeadPhones createHeadPhones(String param);
}

// 具体工厂
class SuperFactory implements AbstractFactory{
    @Override
    public Phone createPhone(String param){
        return new iPhone();
    }
    @Override
    public Computer createComputer(String param){
        return new HP();
    }
    @Override
    public HeadPhones createHeadPhones(String param){
        return new sony();
    }
}

//产品手机
interface Phone{ }
class iPhone implements Phone{ }

//产品电脑
interface Computer{ }
class HP implements Computer{ }

//产品耳机
interface HeadPhones{ }
class sony implements HeadPhones{ }