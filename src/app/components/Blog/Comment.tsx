import {DiscussionEmbed} from 'disqus-react';

type Props = {
    path: string;
    title: string;
};

function Comment({path, title}: Props) {
    const config = {
        url: `https://awd.my.id/${path}`,
        identifier: path,
        title: title,
    }
    return (
        <div>
            <DiscussionEmbed
                shortname='awd-my-id'
                config={
                    {
                        url: config.url,
                        identifier: config.identifier,
                        title: config.title,
                    }
                }
            />
        </div>
    )
}

export default Comment;
