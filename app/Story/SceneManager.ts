import Scene from "./Scene";
import SceneReference from "./SceneReference";
import LinkAction from "./Action/LinkAction";
import ConditionalAction from "./Action/ConditionalAction";
import Equality from "./Condition/Equality";

export default class SceneManager {

    private scenes: Map<string, Scene>;

    constructor() {
        this.scenes = new Map();
        this.scenes.set('test_story.init_scene',
            new Scene('Ты стоишь у входа в пещеру...', [
                new LinkAction('Смело войти', new SceneReference('test_story.second_scene')),
                new LinkAction('Не, нафиг', new SceneReference('test_story.final_scene')),
            ], [])
        );
        this.scenes.set('test_story.second_scene', new Scene('TURN BACK, MORTAL!!!!', [
                new LinkAction('Я всё же пойду дальше', new SceneReference('test_story.second_scene_serious')),
                new LinkAction('Да ну нахер, я пошёл отсюда', new SceneReference('test_story.init_scene'))
            ], [])
        );
        this.scenes.set('test_story.second_scene_serious', new Scene('Не, ну серьёзно', [
                new LinkAction('Вперёд, я сказал!', new SceneReference('test_story.final_scene')),
                new ConditionalAction('Ну ок, посплю!', new SceneReference('test_story.final_scene'), [
                    new Equality('test', 3)
                ]),
                new LinkAction('Я передумал.', new SceneReference('test_story.init_scene'))
            ], [])
        );
        this.scenes.set('test_story.final_scene', new Scene('Ок, тебя убили', [], []));
        this.scenes.set('test_story.final_scene_sleep', new Scene('ты всё просапал', [], []));
    }

    public loadSceneByReference(reference: SceneReference): Scene {
        return this.scenes.get(reference.id) || null;
    }
}