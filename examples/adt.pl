use strict;
use warnings;

sub Just {
    my ($x) = @_;
    sub {
        my ($handler) = @_;
        $handler->{Just}->($x);
    };
}

sub Nothing {
    sub {
        my ($handler) = @_;
        $handler->{Nothing};
    }
}

sub match {
    my ($value, $handler) = @_;
    $value->($handler);
}

sub safeDivide {
    my ($x, $y) = @_;
    $y == 0 ? Nothing() : Just($x/$y);
}

sub displayResult {
    my ($maybeValue) = @_;
    my $extractedValue = match($maybeValue, {
        Just => sub { my ($result) = @_; "Result of division is $result" },
        Nothing => "Handled divide by zero error"
    });
    print "$extractedValue\n";
}

my $badDivision = safeDivide(5,0);
my $goodDivision = safeDivide(22,7);

displayResult($badDivision);
displayResult($goodDivision);
